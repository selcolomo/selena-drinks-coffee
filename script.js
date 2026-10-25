// Hmaburger Sidebar 

const menuButton = document.getElementById("menu-button");
const sidebar = document.getElementById("sidebar");

let pinnedOpen = false;
let closeTimer;


// Open the sidebar
function openSidebar() {
    sidebar.classList.add("open");
}


// Close the sidebar unless it has been pinned open
function closeSidebar() {
    if (!pinnedOpen) {
        sidebar.classList.remove("open");
    }
}


// Open the sidebar when hovering over the hamburger
menuButton.addEventListener("mouseenter", function () {
    clearTimeout(closeTimer);
    openSidebar();
});


// Keep the sidebar open when the cursor enters it
sidebar.addEventListener("mouseenter", function () {
    clearTimeout(closeTimer);
    openSidebar();
});


// Wait briefly before closing the sidebar
function scheduleClose() {
    closeTimer = setTimeout(function () {
        const hoveringButton = menuButton.matches(":hover");
        const hoveringSidebar = sidebar.matches(":hover");

        if (!hoveringButton && !hoveringSidebar) {
            closeSidebar();
        }
    }, 250);
}


// Schedule closing when the cursor leaves the hamburger
menuButton.addEventListener("mouseleave", scheduleClose);


// Schedule closing when the cursor leaves the sidebar
sidebar.addEventListener("mouseleave", scheduleClose);


// Click to pin the sidebar open or close it
menuButton.addEventListener("click", function () {
    pinnedOpen = !pinnedOpen;

    if (pinnedOpen) {
        openSidebar();
    } else {
        closeSidebar();
    }

    menuButton.setAttribute("aria-expanded", pinnedOpen);

    menuButton.setAttribute(
        "aria-label",
        pinnedOpen ? "Close navigation" : "Open navigation"
    );
});

// Explore by State Dropdown

const statesButton = document.getElementById("states-button");
const statesList = document.getElementById("states-list");
const statesArrow = document.getElementById("states-arrow");


// Show or hide the state links when clicked
statesButton.addEventListener("click", function () {
    statesList.classList.toggle("expanded");

    const isExpanded = statesList.classList.contains("expanded");

    statesButton.setAttribute("aria-expanded", isExpanded);

    statesArrow.textContent = isExpanded ? "−" : "+";
});

