import DS from 'ember-data';

export default DS.Model.extend({
filename: DS.attr(),
filesize: DS.attr(),
title: DS.attr(),
author: DS.attr(),
subject: DS.attr(),
category: DS.attr(),
subcategory1: DS.attr(),
subcategory2: DS.attr(),
subcategory3: DS.attr(),
year: DS.attr(),
image: DS.attr(),
link: DS.attr()
});

