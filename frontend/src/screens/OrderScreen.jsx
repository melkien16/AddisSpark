import { Link, useParams } from "react-router-dom";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";

import Message from "../components/Message";
import Loader from "../components/Loader";
import { useGetOrderDetailsQuery } from "../slices/ordersApiSlices";

const OrderScreen = () => {
  const { id: orderId } = useParams();

  const {
    data: order,
    refetch,
    isLoading,
    isError,
  } = useGetOrderDetailsQuery(orderId);

  console.log("Order", order);

  return isLoading ? (
    <Loader />
  ) : isError ? (
    <Message varient="danger" />
  ) : (
    <>
      <h1>Order {order._id}</h1>
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Shipping</h2>
              <p>
                <strong>Name: </strong>
                {order.user.name}
              </p>
              <p>
                <strong>Email: </strong>
                {order.user.email}
              </p>
              <p>
                <strong>Address: </strong>
                {order.shippingAddress.address}, {order.shippingAddress.city}{" "}
                {order.shippingAddress.postalCode},{" "}
                {order.shippingAddress.country}
              </p>
              {order.isDelivered ? (
                <Message varient="success">
                  Delivered on {order.deliveredAt}
                </Message>
              ) : (
                <Message varient="danger">Not Delivered</Message>
              )}
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Payment Method</h2>
              <p>
                <strong>Method: </strong>
                {order.paymentMethod}
              </p>
              {order.isPaid ? (
                <Message varient="success">Paid on {order.paidAt}</Message>
              ) : (
                <Message varient="danger">Not Paid</Message>
              )}
            </ListGroup.Item>
          </ListGroup>
          <ListGroup.Item>
            <h2>Order Items</h2>
            {order.orderItems.map((item, index) => (
              <ListGroup.Item key={index}>
                <Row>
                  <Col md={1}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col md={4}>
                    {item.qty} x ${item.price} = ${(item.qty * item.price).toFixed(2)}
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup.Item>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Order Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
                  <Col>${order.itemsPrice}</Col>
                </Row>
                <Row>
                  <Col>Shipping</Col>
                  <Col>${order.shippingPrice}</Col>
                </Row>
                <Row>
                  <Col>Tax</Col>
                  <Col>${order.taxPrice}</Col>
                </Row>
                <Row>
                  <Col>Total</Col>
                  <Col>${order.totalPrice}</Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default OrderScreen;
