document.addEventListener("DOMContentLoaded", function () {
    AblePlayerInstances = [];
    document.querySelectorAll('[data-able-player]').forEach(function (playerElement) {
        const ablePlayerInstance = new AblePlayer(playerElement);
        AblePlayerInstances.push(ablePlayerInstance);
    });
});  