const { Router, Response } = require("pepesan");
const BotController = require("./controller/BotController");
const f = require("./utils/Formatter");

const router = new Router();

router.menu(f("menu.daftarHarga"), [BotController, "daftarHarga"]);
router.menu(f("menu.cekServis"), [BotController, "cekServis"]);
router.keyword("*", [BotController, "introduction"]);

module.exports = router;