const { Controller, Response } = require("pepesan");
const f = require("../utils/Formatter");
const gSheet = require("../service/gsheet")

module.exports = class BotController extends Controller {


    async introduction(request) {
      return Response.menu.fromArrayOfString(
        [
          f("menu.daftarHarga"),
          f("menu.cekServis")
        ],
        f("intro", [request.name]),
        f("template.menu")
      );
    }

    async daftarHarga(request) {
      await this.reply(f("daftarHargaTemplate"))
      await this.reply(f("footer"))
      return this.sendBasicMenu()
    }

    async cekServis(request) {
      const responseStr = await gSheet.getData(request.number)
      await this.reply(f("headerCekServis"))
      await this.reply(responseStr)
      return this.sendBasicMenu()
    }

    async sendBasicMenu(request) {
      return Response.menu.fromArrayOfObject(
        [
          {
            value: `menu.back`,
            text: f("menu.back"),
            code: "0"
          }
        ],
        "",
        f("template.menu")
      )
    }

}