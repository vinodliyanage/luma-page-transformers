import Transformer from "../transformer";

class Youtube extends Transformer {
  hostname() {
    return "www.youtube.com";
  }

  title(text: string) {
    const title = text.trim().replace(/^\(\d+\)\s+/, "");
    return title;
  }
}

export default Youtube;
