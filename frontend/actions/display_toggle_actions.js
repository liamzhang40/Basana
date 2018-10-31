export const TOGGLE_DASHBOARD_BODY_DISPLAY = "TOGGLE_DASHBOARD_BODY_DISPLAY";

export const toggleDashboardDisplay = content => {
    return {
        type: TOGGLE_DASHBOARD_BODY_DISPLAY,
        content
    };
};