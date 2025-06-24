import Transformer from "../transformer";

class Deviantart extends Transformer {
  hostname() {
    return "www.deviantart.com";
  }

  description(text: string) {
    const description = text.trim().replace(/^Description\"?/i, "");
    return description;
  }
}

export default Deviantart;
