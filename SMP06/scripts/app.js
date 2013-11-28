define(["jQuery", "kendo", "kendoIndexedListView", "data", "config", "utils", "cart", "home-layout", "base-layout", "artists-view", "nailServices-view", "genres-view", "hairServices-view", "albums-view", "serviceItems-view", "search-view", "cart-view", "checkout-view", "account-view", "about-view"],
       function($, kendo,  x,                       data,   config,   utils,   cart,   homeLayout,    baseLayout,    artistsView,    nailServicesView,  genresView,  hairServicesView,   albumsView, serviceItemsView,   searchView,    cartView,    checkoutView,    accountView, aboutView) {

    var _onError = function (error, url, line) {
        utils.showError(error);
    };

    var init = function () {
        window.onerror = _onError;

        var kendoApp = new kendo.mobile.Application(document.body, {
            transition: "fade",
            initial: "hairServices-view",
            loading: '<h1 class="loading-message">Loading...</h1>'
        });
        utils.init(kendoApp);
        cart.items.bind("change", function () { utils.updateCartBadges($, cart); });
    };

    return {
        closeErrorModal: utils.closeError,
        config: config,
        init: init,
        homeLayout: homeLayout,
        baseLayout: baseLayout,
        albumsView: albumsView,
        artistsView: artistsView,
        nailServicesView: nailServicesView,
        genresView: genresView,
        hairServicesView: hairServicesView,
        serviceItemsView: serviceItemsView,
        searchView: searchView,
        cartView: cartView,
        checkoutView: checkoutView,
        accountView: accountView,
        aboutView: aboutView
    };
});