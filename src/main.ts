import moment from "moment";

import { findSignOffSheet } from "./find-sign-off-sheet";
import { createModal } from "./modal";

import "./index.css";
import { findLatestDate } from "./find-latest-date";
import { createSignOffStatusElement } from "./sign-off-status";
import { createContainerBlock } from "./container-block";

declare var $docsify: any;

(function () {
  (window as any).$docsify.plugins = [
    (hook: any, _vm: any) => {
      let signOffCadence = "6 months";
      hook.beforeEach(function (content: string) {
        $docsify.formatUpdated = (time: number) => {
          const date = moment(new Date(time));

          return date.format("MMM Do YYYY");
        };

        const [, match] = content.match(/sign-off-cadence:([a-z0-9 ]+)/i) ?? [];

        signOffCadence = match ? match.trim() : "6 months";
      });

      hook.doneEach(function () {
        const mainContent = document.getElementById("main");

        if (!mainContent) {
          return;
        }

        const modal = createModal(document, [
          ...findSignOffSheet(document.body),
        ]);

        const tableBodyRows = modal.querySelectorAll("tbody > tr");

        if (tableBodyRows.length === 0) {
          return;
        }

        const lastSignOffDate = findLatestDate(tableBodyRows);

        mainContent.prepend(
          createContainerBlock([
            createSignOffStatusElement(lastSignOffDate, signOffCadence),
            modal,
          ])
        );

        const tables = mainContent.querySelectorAll("table");
        tables.forEach((table) => {
          table.setAttribute("style", "display: table;");
        });
      });
    },
    ...($docsify.plugins ? [$docsify.plugins] : []),
  ];
})();

export {};
