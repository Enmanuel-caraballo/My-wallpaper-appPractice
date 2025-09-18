import { registerPlugin } from "@capacitor/core";

export interface IMyCustomPlugin{
  execute: () => Promise<{message: string}>;

}

const myCustomPlugin = registerPlugin<IMyCustomPlugin>('myCustomPlugin');
export default myCustomPlugin;
