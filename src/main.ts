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

        // allListItems.forEach(function (el, index) {
        //   if (el.firstChild!.textContent!.endsWith(" +")) {
        //     const wrapper = document.createElement("div");
        //     const element = allListItems[index];

        //     wrapper.setAttribute(
        //       "id",
        //       `accordion-content--${indexAccordionItemIndex}`
        //     );
        //     wrapper.classList.add("accordion-content-container");

        //     Object.values(el.children).forEach(function (
        //       childElement,
        //       childIndex
        //     ) {
        //       if ((childElement as any).innerText.startsWith("!>")) {
        //         (childElement as any).innerText = (
        //           childElement as any
        //         ).innerText.replace("!>", "");
        //         childElement.classList.add("tip");
        //       }

        //       if (childIndex > 0) {
        //         wrapper.appendChild(childElement);
        //       }
        //     });

        //     el.appendChild(wrapper);

        //     element!.parentElement!.classList.add("bg-blue-100");
        //     element.classList.add("accordion");
        //     element!.firstChild!.addEventListener("click", (e: Event) => {
        //       if (
        //         (e!.target as any).parentElement!.classList.contains("active")
        //       ) {
        //         (e!.target as any).parentElement!.classList.remove("active");
        //       } else {
        //         document.querySelectorAll("li").forEach(function (_el) {
        //           if (_el.classList.contains("accordion")) {
        //             _el.classList.remove("active");
        //           }
        //         });
        //         (e!.target as any).parentElement!.classList.add("active");
        //       }
        //     });

        //     if (indexAccordionItemIndex === 0) {
        //       element.classList.add("active");
        //     }

        //     element!.firstChild!.textContent = (
        //       element!.firstChild as any
        //     ).textContent.substring(
        //       0,
        //       (element!.firstChild as any).textContent.length - 2
        //     );
        //     indexAccordionItemIndex++;
        //   }
        // });
      });
    },
    ...($docsify.plugins ? [$docsify.plugins] : []),
  ];
})();

export {};
