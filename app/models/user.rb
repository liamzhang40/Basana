# == Schema Information
#
# Table name: users
#
#  id                  :integer          not null, primary key
#  name                :string           not null
#  username            :string           not null
#  password_digest     :string           not null
#  session_token       :string           not null
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  avatar_file_name    :string
#  avatar_content_type :string
#  avatar_file_size    :integer
#  avatar_updated_at   :datetime
#

class User < ApplicationRecord

  validates :name, :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true}
  filename = 'missing' + ('1'..'15').to_a.sample + '.jpg'
  has_attached_file :avatar, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: filename
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/

  after_initialize :ensure_session_token
  attr_reader :password

  has_many :tasks,
    class_name: 'Task',
    foreign_key: :assignee_id

  has_many :projects,
    class_name: 'Project',
    foreign_key: :creator_id

  has_many :team_memberships,
    class_name: 'TeamMembership',
    foreign_key: :member_id

  has_many :teams,
    through: :team_memberships,
    source: :team

  has_many :comments

  has_many :task_likes,
    class_name: 'TaskLike',
    foreign_key: :liker_id

  has_many :liked_tasks,
    through: :task_likes,
    source: :task

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil
  end

  def reset_session_token!
    generate_session_token
    self.save!
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  private

  def ensure_session_token
    generate_session_token unless self.session_token
  end

  def generate_session_token
    self.session_token = SecureRandom::urlsafe_base64
    while User.find_by(session_token: self.session_token)
      self.session_token = SecureRandom::urlsafe_base64
    end

    self.session_token
  end

end
