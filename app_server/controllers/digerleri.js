//hakinda controller metodu
//index.js dosyasındaki router.get("/hakkinda", ctrlDigerleri.hakkinda);
//ile metot url'ye bağlanıyor


const hakkinda = function(req, res, next) {
    res.render("hakkinda", { title: "Hakkinda" });
};

module.exports = {
    hakkinda,
};