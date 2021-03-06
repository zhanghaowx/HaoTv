define(["angular",
        "algorithm/name",
        "client/client",
        "video/channel"], function (angular) {
    /**
     * Youtube clients which get video resources from Google's Youtube
     */
    HaoTv.Youtube = function ($http) {
        // base class constructor
        HaoTv.Client.call(this);

        this.baseUrl = "https://www.googleapis.com/youtube/v3";
        this.$http = $http;
    };

    HaoTv.Youtube.prototype = {
        constructor: HaoTv.Youtube,
        /**
         * Get a list of videos by channel id
         */
        getVideo: function (channelId, done) {
            var orderBy = "date";
            var maxResults = 50;
            var queryUrl = "{0}/search?key={1}&channelId={2}&part=snippet,id&order={3}&maxResults={4}"
                .format(this.baseUrl, HaoTv.GOOGLE_API_KEY, channelId, orderBy, maxResults);

            return this.$http.get(queryUrl).then(function (response) {
                var channel = new HaoTv.Channel();
                if (response.data.items.length > 0) {
                    channel.id = channelId;
                    channel.videos = response.data.items;

                    for (var i in channel.videos) {
                        var video = channel.videos[i];
                        video.title = HaoTv.parseName(video.snippet.title).seriesTitle;
                    }
                }

                done(channel);
            });
        },
        /**
         * Get channel basic information by channel id
         */
        getChannel: function (channelId, done) {
            var queryUrl = "{0}/channels?key={1}&id={2}&part=brandingSettings"
                .format(this.baseUrl, HaoTv.GOOGLE_API_KEY, channelId);

            return this.$http.get(queryUrl).then(function (response) {
                var channel = new HaoTv.Channel();
                if (response.data.items.length > 0) {
                    channel = response.data.items[0].brandingSettings.channel;
                    channel.id = channelId;
                    channel.image = response.data.items[0].brandingSettings.image.bannerImageUrl;

                    // replace default banner with our own image
                    if (channel.image.indexOf("default_banner") >= 0) {
                        channel.image = null;
                    }
                }

                done(channel);
            });
        }
    };

    return HaoTv;
});
