import Button from "../ui/button";
import styles from "./catalog-filter-btn.module.css";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { ListFilter } from "lucide-react";

export default function CatalogFilterBtn() {
  return (
    <>
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline" size="lg">
            <ListFilter size={18} color="#21232d" /> Filtruj
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className={styles.drawerContent}>
            <DrawerHeader>
              <DrawerTitle className={styles.title}>
                Filtruj katalog
              </DrawerTitle>
            </DrawerHeader>
            <div className={styles.filterList}>
              <DocumentTypeSelect />
              <AuthorSelect />
              <PublisherSelect />
              <TopicSelect />
              <TargetGroupSelect />
              <LanguageSelect />
              <GenreSelect />
            </div>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button variant="outline" size="lg">
                  Zamknij
                </Button>
              </DrawerClose>
              <Button variant="primary" size="lg">
                Zatwierdź
              </Button>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}

function DocumentTypeSelect() {
  const types = ["Książka", "Czasopismo", "E-book"];

  return (
    <Select>
      <SelectTrigger className={styles.selectTrigger}>
        <SelectValue placeholder="Wybierz typ dokumentu" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {types.map((type) => (
            <SelectItem key={type} value={type}>
              {type}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

function AuthorSelect() {
  const authors = ["Autor 1", "Autor 2", "Autor 3"];

  return (
    <Select>
      <SelectTrigger className={styles.selectTrigger}>
        <SelectValue placeholder="Wybierz autora" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {authors.map((author) => (
            <SelectItem key={author} value={author}>
              {author}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

function PublisherSelect() {
  const publishers = ["Wydawca 1", "Wydawca 2", "Wydawca 3"];

  return (
    <Select>
      <SelectTrigger className={styles.selectTrigger}>
        <SelectValue placeholder="Wybierz wydawcę" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {publishers.map((publisher) => (
            <SelectItem key={publisher} value={publisher}>
              {publisher}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

function TopicSelect() {
  const topics = ["Temat 1", "Temat 2", "Temat 3"];

  return (
    <Select>
      <SelectTrigger className={styles.selectTrigger}>
        <SelectValue placeholder="Wybierz temat" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {topics.map((topic) => (
            <SelectItem key={topic} value={topic}>
              {topic}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

function TargetGroupSelect() {
  const groups = ["Grupa 1", "Grupa 2", "Grupa 3"];

  return (
    <Select>
      <SelectTrigger className={styles.selectTrigger}>
        <SelectValue placeholder="Wybierz grupę docelową" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {groups.map((group) => (
            <SelectItem key={group} value={group}>
              {group}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

function LanguageSelect() {
  const languages = ["Polski", "Angielski", "Niemiecki"];

  return (
    <Select>
      <SelectTrigger className={styles.selectTrigger}>
        <SelectValue placeholder="Wybierz język" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {languages.map((language) => (
            <SelectItem key={language} value={language}>
              {language}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

function GenreSelect() {
  const genres = ["Fantastyka", "Kryminał", "Romans"];

  return (
    <Select>
      <SelectTrigger className={styles.selectTrigger}>
        <SelectValue placeholder="Wybierz gatunek" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {genres.map((genre) => (
            <SelectItem key={genre} value={genre}>
              {genre}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
