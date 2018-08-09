# BASANA

[![Basana splash](https://github.com/liamzhang40/Basana/blob/master/basana_wireframe/Screen%20Shot%202018-06-03%20at%206.22.32%20PM.png)](https://basana.herokuapp.com)

## Summary
Basana is a single-page project management web application inspired by Asana built with JavaScript, React.js, Redux, PostgreSQL and Ruby on Rails.

### Features
Basana allows users to: 
* Create an account
* Log in / Log out
* Update profile information
* Create, edit and delete Teams and Projects
* Create, edit, complete and assign Tasks to a member or assign a deadline
* Search for and invite team members

### Languages and Libraries
* JavaScript
* React.js
* Redux
* Ruby
* Ruby on Rails
* PostgreSQL
* HTML5 + CSS3

## Implementation in Detail
* ###  Debounce function
Task title and description are dynamically updated every 1 sec after user stops making changes.

![Dynamic update](https://github.com/liamzhang40/Basana/blob/master/basana_wireframe/dynamic_update.gif)

The TaskForm component is initialized with a timeout instance set as Null. An update function is passed to input field event listener as a callback. Every time when the user changes input, an action is dispatched to mutate the Redux state; the timeout instance is cleared if present and is reset to a new setTimeout object. After 1000 ms, an AJAX request is sent to update the database.

![Debounce1](https://github.com/liamzhang40/Basana/blob/master/basana_wireframe/Debounce1.png)
![Debounce2](https://github.com/liamzhang40/Basana/blob/master/basana_wireframe/Debounce2.png)


* ###  User Search
Team member form searches for existing users and completes email addresses upon click.  

![User search](https://github.com/liamzhang40/Basana/blob/master/basana_wireframe/user_search.gif)

Debounce function is also implemented here so that an AJAX request to search users is sent whenever user stops typing. Additionally component state controls the visibility of dropdown containing search results. Visibility is toggled through onFocus and onBlur installed on the input field of search bar. 

![User Search1](https://github.com/liamzhang40/Basana/blob/master/basana_wireframe/user_search1.png)

setState function of TeamMemberForm component is passed down to its child component UserSearchItem. The child component invokes this callback to mutate the parent component's state. One challenge here was that onBlur(closes the dropdown) and onClick(completes the input field) listens to the same event and event handlers are prioritized in a certain order that the dropdown always closes before the input field is completed. I initially solved this with setTimeout but found out that using onMouseDown instead can fix this issue.

![User Search3](https://github.com/liamzhang40/Basana/blob/master/basana_wireframe/user_search3.png)
![User Search4](https://github.com/liamzhang40/Basana/blob/master/basana_wireframe/user_search4.png)

## Future Plans
* Complete comment feature (edit/delete)
* Log user's activities on tasks (user1 updated on 06/17/2019)
* Implement infinite scroll to comment index (display 3 latest comment, scroll to see more)
* Create report feature
...
