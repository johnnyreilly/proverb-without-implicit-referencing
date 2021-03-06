/// <reference path="../_references.d.ts" />
(function () {
    "use strict";
    var controllerId = "admin";
    angular.module("app").controller(controllerId, ["common", admin]);
    function admin(common) {
        var log = common.logger.getLoggers(controllerId);
        var vm = this;
        vm.title = "Admin";
        activate();
        function activate() {
            common.activateController([], controllerId, vm.title).then(function () {
                log.info3("Activated Admin View");
            });
        }
    }
})();
//# sourceMappingURL=admin.js.map