const { Controller, Response } = require("pepesan");
const f = require("../utils/Formatter");

module.exports = class BotController extends Controller {


    async introduction(request) {
      return Response.menu.fromArrayOfString(
        [
          f("menu.daftarProduk"),
          f("menu.alamatKantor")
        ],
        f("intro", [request.name]),
        f("template.menu")
      );
    }

    async product(request) {
      return this.reply("Ini Bot WA Toko Servis Komputer")
    }

    async alamatKantor(request) {
      return this.reply("Alamat kantor kami ada di Pamulang")
    }

}