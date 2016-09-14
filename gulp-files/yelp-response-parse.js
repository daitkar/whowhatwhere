/**
 * Created by M053 on 8/4/2016.
 */

module.exports = function (data) {
    console.log('yelp data',data.businesses);
    var parsed = [];
    for (var ite of data.businesses) {
        var entry = {};
        if (ite.name) {
            console.log('ite.name',ite.name);
            entry.name = ite.name;
        } else {
            //we dont need a business without a name
            continue;
        }

        if (ite.location.address instanceof Array && ite.location.address.length > 0) {
            
            entry.address = ite.location.address.join();
            console.log('entry.address',entry.address);
        } else {
            entry.address = 'NA';
        }

        if (ite.categories instanceof Array && ite.categories.length > 0) {
            entry.categories = [];
            ite.categories.forEach(function (e) {
                if (e instanceof Array) {
                    entry.categories.push(e[0]);
                }
            });
        } else {
            entry.categories = 'NA';
        }

        if (ite.location.coordinate instanceof Object &&
            ite.location.coordinate.latitude !== undefined &&
            ite.location.coordinate.longitude !== undefined) {
            console.log('ite.location.coordinate.longitude',ite.location.coordinate.longitude);
            entry.cords = {lat: ite.location.coordinate.latitude, lon: ite.location.coordinate.longitude};
        } else {
            //we dont need a business without coordinates
            continue;
        }

        if (ite.location.city) {
            entry.city = ite.location.city;
            console.log('entry.city',entry.city)
        } else {
            entry.city = 'NA';
        }

        if (ite.rating) {
            entry.rating = ite.rating;
        } else {
            entry.rating = 'NA';
        }

        if (ite.display_phone) {
            entry.phone = ite.display_phone;
        } else {
            entry.phone = 'NA';
        }

        if (ite.snippet_image_url) {
            entry.photo = ite.snippet_image_url;
        } else {
            entry.photo = 'http://www.megaicons.net/static/img/icons_sizes/8/60/256/science-business-icon.png';
        }

        if (ite.url) {
            entry.url = ite.url;
        } else {
            entry.url = 'NA';
        }

        if (ite.snippet_text) {
            entry.description = ite.snippet_text;
        } else {
            entry.description = 'NA';
        }

        parsed.push(entry);
    }
    return parsed;
};