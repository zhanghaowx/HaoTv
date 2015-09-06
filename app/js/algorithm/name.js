/**
 * Parse video name to retrieve more info
 */

define(["core/core"], function (HaoTv) {
    HaoTv.parseName = function (videoName) {
        return {
            seriesTitle: getSeriesTitle(videoName),
            version: getVersion(videoName),
            name: videoName
        };
    };

    var getSeriesTitle = function (videoName) {
        // matches 《...》
        var titles = /\u300a(.*?)\u300b/g.exec(videoName);
        if (titles && titles.length) {
            return titles[0];
        }

        return "";
    };

    var getVersion = function (videoName) {
        // matches 【...】
        var version = /\u3010(.*?)\u3011/g.exec(videoName);
        if (version && version.length)
            return version[0];
        return "";
    };
});
