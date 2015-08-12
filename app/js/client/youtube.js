define(["angular",
        "client/client",
        "video/channel"], function (angular, HaoTv) {
    /**
     * Youtube clients which get video resources from Google's Youtube
     */
    HaoTv.Youtube = function ($http) {
        // base class constructor
        HaoTv.Client.call(this);

        this.baseUrl = "https://www.googleapis.com/youtube/v3/search";
        this.$http = $http;
    };

    HaoTv.Youtube.prototype = {
        constructor: HaoTv.Youtube,
        /**
         * Get a list of videos by channel id
         */
        getVideo: function (channelId) {
            var orderBy = "date";
            var maxResults = 20;
            var queryUrl = "{0}?key={1}&channelId={2}&part=snippet,id&order={3}&maxResults={4}"
                .format(this.baseUrl, HaoTv.GOOGLE_API_KEY, channelId, orderBy, maxResults);

            return this.$http.get(queryUrl);
        },
        /**
         * Parse HTTP response and return a channel object
         */
        parseResponse: function (data) {
            var channel = new HaoTv.Channel();
            if (data.items.length > 0) {
                channel.id = data.items[0].snippet.channelId;
                channel.videos = data.items;
            }

            return channel;
        }
    };

    return HaoTv;
});