export class TransformService {
    static fbObjectToArray(fbData) {
        return Object.keys(fbData).map(function (key) {
            const item = fbData[key];
            item.id = key;
            return item;
        });
    }
}