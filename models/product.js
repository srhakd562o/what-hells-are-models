const fs = require('fs');
const path = require('path');

module.exports = class Product {
    constructor(title) {
        this.title = title;
    }

    save() {
        const p = path.join(
            path.dirname(process.mainModule.filename),
            'data',
            'products.json'
        );
        fs.readFile(p, (err, fileContent) => {
            if (err) {
                console.error(err);
                return;
            }
            let products = [];
            try {
                products = JSON.parse(fileContent);
            } catch (error) {
                console.error('Error parsing JSON:', error);
            }
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), err => {
                if (err) {
                    console.error(err);
                }
            });
        });
    }

    static fetchAll(cb) {
        const p = path.join(
            path.dirname(process.mainModule.filename),
            'data',
            'products.json'
        );
        fs.readFile(p, (err, fileContent) => {
            if (err) {
                console.error(err);
                cb([]);
                return;
            }
            let products = [];
            try {
                products = JSON.parse(fileContent);
            } catch (error) {
                console.error('Error parsing JSON:', error);
            }
            cb(products);
        });
    }
};
