define(["client/client",
        "video/channel"], function (HaoTv) {
    /**
     * Youtube clients which get video resources from Google's Youtube
     */
    HaoTv.Youtube = function () {
        // base class constructor
        HaoTv.Client.call(this);

        this.baseUrl = "https://www.googleapis.com/youtube/v3/search";
    };

    HaoTv.Youtube.prototype = {
        constructor: HaoTv.Youtube,
        /**
         * Get a list of videos by channel id
         */
        getVideo: function (channelId, onChannelCreated) {
            var orderBy = "date";
            var maxResults = 20;
            var queryUrl = "{0}?key={1}&channelId={2}&part=snippet,id&order={3}&maxResults={4}"
                .format(this.baseUrl, HaoTv.GOOGLE_API_KEY, channelId, orderBy, maxResults);
            $.get(queryUrl, function (data) {
                var channel = new HaoTv.Channel();
                channel.id = channelId;
                channel.items = data.items;
                // notify caller the channel is created
                onChannelCreated(channel);
            });
        },
    };

    return HaoTv;
});