export class TransformService {
    /*
        Принимает на входе массив с объектами и
        превращает объекты типа:
            key: {
                    ...
                 }

            в такой вид:

            {
                ...
                id: key
            }
         */
    static fbObjectToArray(fbData) {
        return this.arrayKeys(fbData).map(function (key) {
            const item = fbData[key];
            item.id = key;
            return item;
        });
    }

    static arrayKeys(array){
        return Object.keys(array);
    }
}
