import Button from "@/components/ui/button";
import BtnsGroup from "@/components/ui/btns-group";
import styles from "./pagination-buttons.module.css";

type PaginationButtonsProps = {
  curPage: number;
  numPages: number;
  site: "wydarzenia" | "filie" | "aktualnosci" | "katalog-glowny";
};

export default function PaginationButtons({
  site,
  curPage,
  numPages,
}: PaginationButtonsProps) {
  const generateHref = (page: number) => `/${site}?page=${page}`;

  const renderPageButtons = () => {
    const buttons = [];

    if (numPages <= 6) {
      for (let i = 1; i <= numPages; i++) {
        buttons.push(
          <Button
            key={i}
            link="yes"
            href={generateHref(i)}
            variant={curPage === i ? "primary" : "outline"}
            size="paginationButton"
          >
            {i}
          </Button>
        );
      }
    } else {
      if (curPage <= 4) {
        for (let i = 1; i <= 4; i++) {
          buttons.push(
            <Button
              key={i}
              link="yes"
              href={generateHref(i)}
              variant={curPage === i ? "primary" : "outline"}
              size="paginationButton"
            >
              {i}
            </Button>
          );
        }
        buttons.push(
          <Button
            key="forwardDots"
            link="yes"
            href={generateHref(curPage + 4)}
            variant="outline"
            size="paginationButton"
          >
            ...
          </Button>
        );
        buttons.push(
          <Button
            key={numPages}
            link="yes"
            href={generateHref(numPages)}
            variant={curPage === numPages ? "primary" : "outline"}
            size="paginationButton"
          >
            {numPages}
          </Button>
        );
      } else if (curPage > 4 && curPage < numPages - 3) {
        buttons.push(
          <Button
            key={1}
            link="yes"
            href={generateHref(1)}
            variant={curPage === 1 ? "primary" : "outline"}
            size="paginationButton"
          >
            1
          </Button>
        );
        buttons.push(
          <Button
            key="backwardDots"
            link="yes"
            href={generateHref(curPage - 4)}
            variant="outline"
            size="paginationButton"
          >
            ...
          </Button>
        );
        for (let i = curPage - 1; i <= curPage + 1; i++) {
          buttons.push(
            <Button
              key={i}
              link="yes"
              href={generateHref(i)}
              variant={curPage === i ? "primary" : "outline"}
              size="paginationButton"
            >
              {i}
            </Button>
          );
        }
        buttons.push(
          <Button
            key="forwardDots"
            link="yes"
            href={generateHref(curPage + 4)}
            variant="outline"
            size="paginationButton"
          >
            ...
          </Button>
        );
        buttons.push(
          <Button
            key={numPages}
            link="yes"
            href={generateHref(numPages)}
            variant={curPage === numPages ? "primary" : "outline"}
            size="paginationButton"
          >
            {numPages}
          </Button>
        );
      } else {
        buttons.push(
          <Button
            key={1}
            link="yes"
            href={generateHref(1)}
            variant={curPage === 1 ? "primary" : "outline"}
            size="paginationButton"
          >
            1
          </Button>
        );
        buttons.push(
          <Button
            key="backwardDots"
            link="yes"
            href={generateHref(curPage - 4)}
            variant="outline"
            size="paginationButton"
          >
            ...
          </Button>
        );
        for (let i = numPages - 3; i <= numPages; i++) {
          buttons.push(
            <Button
              key={i}
              link="yes"
              href={generateHref(i)}
              variant={curPage === i ? "primary" : "outline"}
              size="paginationButton"
            >
              {i}
            </Button>
          );
        }
      }
    }

    return buttons;
  };

  return (
    <BtnsGroup className={styles.paginationBtns}>
      {renderPageButtons()}
    </BtnsGroup>
  );
}
