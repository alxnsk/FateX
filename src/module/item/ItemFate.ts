import { ItemDataFate } from "./ItemTypes";

export class ItemFate extends Item<ItemDataFate> {
    prepareData() {
        super.prepareData();
        const data = this.data;

        // Let every itemType prepare itself
        if (CONFIG.FateX.itemClasses[data.type]) {
            CONFIG.FateX.itemClasses[data.type].prepareItemData(data, this);
        }
    }
}
