define(["client/client"], function (HaoTv) {
    // Namespaces
    var HaoTv = HaoTv || {};

    /**
     * Youtube clients which get video resources from Google's Youtube
     */
    HaoTv.Youtube = function () {
        // base class constructor
        HaoTv.Client.call(this);
    };

    HaoTv.Youtube.prototype = {
        constructor: HaoTv.Youtube,
        getVideo: function (id) {
            console.log("RequireJs Working");
        }
    };

    return HaoTv;
});