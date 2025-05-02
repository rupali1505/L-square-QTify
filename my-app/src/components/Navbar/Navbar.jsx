import React, {useState} from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";
import DialogueBox from "../DialogueBox/DialogueBox"

function Navbar({ searchData }) {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
    <nav className={styles.navbar}>
      <Link to="/">
        <Logo />
      </Link>
      <Search
        placeholder="Search a song of your choice"
        searchData={searchData}
      />
      <Link to="/">
      <Button onClick={(e) => {
      e.preventDefault();    // ← stop the nav
      setDialogOpen(true);
    }}
    variant="contained">Give Feedback</Button>
      </Link>
    </nav>
    <DialogueBox open={dialogOpen} onClose={() => setDialogOpen(false)} />
    </>
  );
}

export default Navbar;
