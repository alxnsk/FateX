import { StuntItem } from "../stunt/StuntItem";

export class ExtraThingItem extends StuntItem {
    static get documentName() {
        return "extraThing";
    }

    static async getActorSheetData(sheetData) {
        sheetData = await StuntItem.getActorSheetData(sheetData);

        for (const extraThing of sheetData.extraThings) {
            // @ts-ignore
            extraThing.system.description = await TextEditor.enrichHTML(extraThing.system.description, { async: true });
        }

        return sheetData;
    }

    static async getSheetData(sheetData) {
        // @ts-ignore
        sheetData.enrichedDescription = await TextEditor.enrichHTML(sheetData.system.description, { async: true });
    }
    
}
