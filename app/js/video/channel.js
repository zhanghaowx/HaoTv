define(["video/video"], function (HaoTv) {
    /**
     * A channel is a collection of videos
     */
    HaoTv.Channel = function () {
        // Id of the channel
        this.id = "";
        // A list of videos
        this.items = [
        ];
    };

    HaoTv.Channel.prototype = {
        constructor: HaoTv.Channel
    };

    return HaoTv;
});