let ANIM_SPEED = 250;

// These are the clusters of televisions throughout Cove1 and Cove2
let clusters = [
    "cove1_kitchen1",
    "cove1_kitchen2",
    "cove1_wedge",
    "cove1_nlab",
    "cove1_base11_lab",
    "cove1_front_desk",
    "cove2_front_desk",
    "cove2_demo_room",
    "cove2_kitchen"
];

// Assigns functions and initial state for each button in the navigation bars
function initNavBars() {
    let cluster_nav = $("#cluster_nav_div");
    // let height = parseInt(cluster_nav.css("height"));

    cluster_nav.css("top", ("-80px")).hide();

    $("#cove1_button").click(function() {
        $(".cluster").hide();
        toggleClusterNavBar(1);
    });

    $("#cove2_button").click(function() {
        $(".cluster").hide();
        toggleClusterNavBar(2);
    });

    for (let i = 0; i < clusters.length; ++i) {
        $('#' + clusters[i] + "_button").click(function() {
            toggleCluster(clusters[i] + "_div");
        });
    }
}

// Toggles the visibility of a particular television cluster
function toggleCluster(cluster) {
    $(".cluster").hide();
    let c = $('#' + cluster);
    let cy = c.innerHeight();
    let cd = $("#content_div");
    let cdy = cd.innerHeight();
    let offset = (cdy / 2) - (cy / 2);

    c.show();
    c.css("margin-top", offset);
}

// Animation objects used by the cluster navigation bar
let anim_show = {
    "top":"0px",
};

let anim_hide = {
    "top":"-80px",
};

// Toggles the visibility of the cluster navigation bar
function toggleClusterNavBar(cove) {
    let cluster_nav = $("#cluster_nav_div");
    let cove1_buttons = $(".cove1_buttons");
    let cove2_buttons = $(".cove2_buttons");
    let cove1_hidden = cove1_buttons.is(":hidden");
    let cove2_hidden = cove2_buttons.is(":hidden");
    let hide_first = false;

    switch (cove) {
        case 1:
            if (!cove2_hidden) {
                hide_first = true;
            }
        case 2:
            if (!cove1_hidden) {
                hide_first = true;
            }
            break;
    }

    if (hide_first) {
        // Bar is shown with wrong buttons. Hide the bar
        hideClusterNav(true, cove);
    } else if (cluster_nav.is(":hidden")) {
        // Show the bar and appropriate buttons
        showClusterNav(cove);
    } else {
        // Hide the bar and keep the buttons
        hideClusterNav(false, cove);
    }
}

function showClusterNav(cove) {
    $("#cluster_nav_div")
        .show()
        .animate(anim_show, ANIM_SPEED);
    toggleButtons(cove);
}

function hideClusterNav(showAfter, cove) {
    let cn = $("#cluster_nav_div");

    cn.animate(anim_hide, ANIM_SPEED, null, function() {
        cn.hide();
        if (showAfter) {
            showClusterNav(cove);
        }
    });

}

function toggleButtons(cove) {
    let cove1_buttons = $(".cove1_buttons");
    let cove2_buttons = $(".cove2_buttons");

    switch (cove) {
        case 1:
            cove2_buttons.hide();
            cove1_buttons.show();
            break;
        case 2:
            cove1_buttons.hide();
            cove2_buttons.show();
    }
}

