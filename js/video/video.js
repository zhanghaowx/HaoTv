define(["app"], function (HaoTv) {
    /**
     * A video
     */
    HaoTv.Video = function () {
        // Id of the video
        this.id = "";
        // Basic details about the video
        this.snippet = {
            title: "",
            description: "",
            country: "",
            thumbnails: []
        };
    };

    HaoTv.Video.prototype = {
        constructor: HaoTv.Video
    };

    return HaoTv;
});