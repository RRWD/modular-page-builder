// Expose some functionality globally.
var globals = {
	Builder:       require('models/builder'),
	ModuleFactory: require('utils/module-factory'),
	editViewMap:   require('utils/edit-view-map'),
	views: {
		BuilderView: require('views/builder'),
		ModuleEdit:  require('views/module-edit'),
	}
};

module.exports = globals;