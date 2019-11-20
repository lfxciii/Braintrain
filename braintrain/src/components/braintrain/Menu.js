import React from "react";
import { Nav } from "react-bootstrap";

const Menu = props => {
    return (
        <div className="container rounded shadow w-50">
            <Nav>
                <Nav.Item>
                    <Nav.Link href="/playgame">Play Game</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/help">Help</Nav.Link>
                </Nav.Item>                
            </Nav>
        </div>
    );
}

export default Menu;