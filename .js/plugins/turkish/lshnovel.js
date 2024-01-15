"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var cheerio_1 = require("cheerio");
var fetch_1 = require("@libs/fetch");
var filterInputs_1 = require("@libs/filterInputs");
var LSHNovel = /** @class */ (function () {
    function LSHNovel() {
        this.id = "lshnovel";
        this.name = "Liebe Schnee Hiver Novel";
        this.icon = "multisrc/wpmangastream/icons/lshnovel.png";
        this.site = "https://lshnovel.com/";
        this.version = "1.0.0";
        this.userAgent = "";
        this.filters = {
            order: {
                value: "popular",
                label: "Önerilen",
                options: [
                    { label: "Varsayılan", value: "" },
                    { label: "A-Z", value: "title" },
                    { label: "Z-A", value: "titlereverse" },
                    { label: "Son Yüklemeler", value: "update" },
                    { label: "Son Eklenenler", value: "latest" },
                    { label: "Bestimiz", value: "popular" },
                ],
                type: filterInputs_1.FilterTypes.Picker,
            },
            status: {
                label: "Statü",
                value: "",
                options: [
                    { label: "Tümü", value: "" },
                    { label: "Ongoing", value: "ongoing" },
                    { label: "Hiatus", value: "hiatus" },
                    { label: "Completed", value: "completed" },
                ],
                type: filterInputs_1.FilterTypes.Picker,
            },
            type: {
                value: [],
                label: "Tür",
                options: [
                    { label: "Çeviri Novel", value: "ceviri-novel" },
                    { label: "Liz-Chan", value: "liz-chan" },
                    { label: "Manhwa", value: "manhwa" },
                    { label: "Orijinal Novel", value: "orijinal-novel" },
                    { label: "Web Novel", value: "web-novel" },
                ],
                type: filterInputs_1.FilterTypes.CheckboxGroup,
            },
            genres: {
                value: [],
                label: "Kategori",
                options: [
                    { label: "+18", value: "18" },
                    { label: "Action", value: "action" },
                    { label: "Adult", value: "adult" },
                    { label: "Aksiyon", value: "aksiyon" },
                    { label: "BL", value: "bl" },
                    { label: "Comedy", value: "comedy" },
                    { label: "Doğaüstü", value: "dogaustu" },
                    { label: "Dram", value: "dram" },
                    { label: "Drama", value: "drama" },
                    { label: "Ecchi", value: "ecchi" },
                    { label: "Fantastik", value: "fantastik" },
                    { label: "Fantasy", value: "fantasy" },
                    { label: "Gizem", value: "gizem" },
                    { label: "Harem", value: "harem" },
                    { label: "Historical", value: "historical" },
                    { label: "Josei", value: "josei" },
                    { label: "Macera", value: "macera" },
                    { label: "Manhwa", value: "manhwa" },
                    { label: "Martial Arts", value: "martial-arts" },
                    { label: "Mature", value: "mature" },
                    { label: "Novel", value: "novel" },
                    { label: "Okul", value: "okul" },
                    { label: "Psikolojik", value: "psikolojik" },
                    { label: "Psychological", value: "psychological" },
                    { label: "Reverse Harem", value: "reverse-harem" },
                    { label: "Romance", value: "romance" },
                    { label: "Romantik", value: "romantik" },
                    { label: "Shoujo", value: "shoujo" },
                    { label: "Slice Of Life", value: "slice-of-life" },
                    { label: "Smut", value: "smut" },
                    { label: "Supernatural", value: "supernatural" },
                    { label: "Tarihi", value: "tarihi" },
                    { label: "Tragedy", value: "tragedy" },
                    { label: "Yaoi", value: "yaoi" },
                ],
                type: filterInputs_1.FilterTypes.CheckboxGroup,
            },
        };
    }
    LSHNovel.prototype.popularNovels = function (pageNo, _a) {
        var filters = _a.filters;
        return __awaiter(this, void 0, void 0, function () {
            var link, headers, body, loadedCheerio, novels;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        link = "".concat(this.site, "series/?page=").concat(pageNo);
                        if (filters.genres.value.length) {
                            link += filters.genres.value.map(function (i) { return "&genre[]=".concat(i); }).join("");
                        }
                        if (filters.type.value.length)
                            link += filters.type.value.map(function (i) { return "&lang[]=".concat(i); }).join("");
                        link += "&status=" + filters.status;
                        link += "&order=" + filters.order;
                        headers = new Headers();
                        return [4 /*yield*/, (0, fetch_1.fetchApi)(link, { headers: headers }).then(function (result) {
                                return result.text();
                            })];
                    case 1:
                        body = _b.sent();
                        loadedCheerio = (0, cheerio_1.load)(body);
                        novels = [];
                        loadedCheerio("article.bs").each(function () {
                            var novelName = loadedCheerio(this).find(".ntitle").text().trim();
                            var image = loadedCheerio(this).find("img");
                            var novelCover = image.attr("data-src") || image.attr("src");
                            var novelUrl = loadedCheerio(this).find("a").attr("href");
                            if (!novelUrl)
                                return;
                            var novel = {
                                name: novelName,
                                cover: novelCover,
                                url: novelUrl,
                            };
                            novels.push(novel);
                        });
                        return [2 /*return*/, novels];
                }
            });
        });
    };
    LSHNovel.prototype.parseNovelAndChapters = function (novelUrl) {
        return __awaiter(this, void 0, void 0, function () {
            var url, headers, result, body, loadedCheerio, novel, chapter;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = novelUrl;
                        headers = new Headers();
                        return [4 /*yield*/, (0, fetch_1.fetchApi)(url, { headers: headers })];
                    case 1:
                        result = _a.sent();
                        return [4 /*yield*/, result.text()];
                    case 2:
                        body = _a.sent();
                        loadedCheerio = (0, cheerio_1.load)(body);
                        novel = {
                            url: url,
                            chapters: [],
                        };
                        novel.name = loadedCheerio(".entry-title").text();
                        novel.cover =
                            loadedCheerio("img.wp-post-image").attr("data-src") ||
                                loadedCheerio("img.wp-post-image").attr("src");
                        loadedCheerio("div.spe > span").each(function () {
                            var detailName = loadedCheerio(this).find("b").text().trim();
                            var detail = loadedCheerio(this)
                                .find("b")
                                .remove()
                                .end()
                                .text()
                                .trim();
                            switch (detailName) {
                                case "Yazar:":
                                    novel.author = detail;
                                    break;
                                case "Seviye:":
                                    novel.status = detail;
                                    break;
                            }
                        });
                        novel.genres = loadedCheerio(".genxed")
                            .text()
                            .trim()
                            .replace(/\s/g, ",");
                        loadedCheerio('div[itemprop="description"]  h3,p.a,strong').remove();
                        novel.summary = loadedCheerio('div[itemprop="description"]')
                            .find("br")
                            .replaceWith("\n")
                            .end()
                            .text();
                        chapter = [];
                        loadedCheerio(".eplister")
                            .find("li")
                            .each(function () {
                            var chapterName = loadedCheerio(this).find(".epl-num").text() +
                                " - " +
                                loadedCheerio(this).find(".epl-title").text();
                            var releaseDate = loadedCheerio(this)
                                .find(".epl-date")
                                .text()
                                .trim();
                            var chapterUrl = loadedCheerio(this).find("a").attr("href");
                            if (!chapterUrl)
                                return;
                            chapter.push({
                                name: chapterName,
                                releaseTime: releaseDate,
                                url: chapterUrl,
                            });
                        });
                        novel.chapters = chapter.reverse();
                        return [2 /*return*/, novel];
                }
            });
        });
    };
    LSHNovel.prototype.parseChapter = function (chapterUrl) {
        return __awaiter(this, void 0, void 0, function () {
            var headers, result, body, loadedCheerio, chapterText;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        headers = new Headers();
                        return [4 /*yield*/, (0, fetch_1.fetchApi)(chapterUrl, { headers: headers })];
                    case 1:
                        result = _a.sent();
                        return [4 /*yield*/, result.text()];
                    case 2:
                        body = _a.sent();
                        loadedCheerio = (0, cheerio_1.load)(body);
                        chapterText = loadedCheerio(".epcontent").html() || "";
                        return [2 /*return*/, chapterText];
                }
            });
        });
    };
    LSHNovel.prototype.searchNovels = function (searchTerm, pageNo) {
        return __awaiter(this, void 0, void 0, function () {
            var url, headers, result, body, loadedCheerio, novels;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "".concat(this.site, "?s=").concat(searchTerm);
                        headers = new Headers();
                        return [4 /*yield*/, (0, fetch_1.fetchApi)(url, { headers: headers })];
                    case 1:
                        result = _a.sent();
                        return [4 /*yield*/, result.text()];
                    case 2:
                        body = _a.sent();
                        loadedCheerio = (0, cheerio_1.load)(body);
                        novels = [];
                        loadedCheerio("article.bs").each(function () {
                            var novelName = loadedCheerio(this).find(".ntitle").text().trim();
                            var novelCover = loadedCheerio(this).find("img").attr("src");
                            var novelUrl = loadedCheerio(this).find("a").attr("href");
                            if (!novelUrl)
                                return;
                            novels.push({
                                name: novelName,
                                url: novelUrl,
                                cover: novelCover,
                            });
                        });
                        return [2 /*return*/, novels];
                }
            });
        });
    };
    LSHNovel.prototype.fetchImage = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, fetch_1.fetchFile)(url)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return LSHNovel;
}());
exports.default = new LSHNovel();