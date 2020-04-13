import React, { useEffect } from "react";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useSelector, useDispatch } from "react-redux";
import { getItems, deleteItem } from "../actions/itemActions";

export default function ShoppingList(props) {
  const items = useSelector((state) => state.item.items);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  return (
    <ListGroup>
      <TransitionGroup className="shopping-list">
        {items.map(({ _id, name }) => (
          <CSSTransition key={_id} timeout={500} classNames="fade">
            <ListGroupItem>
              {isAuthenticated && (
                <Button
                  className="remove-btn"
                  color="danger"
                  size="sm"
                  onClick={() => dispatch(deleteItem(_id))}
                >
                  &times;
                </Button>
              )}
              {name}
            </ListGroupItem>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ListGroup>
  );
}
