import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Card, Image } from "semantic-ui-react";
import ProductService from "../services/productService";

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const { name } = useParams();

  useEffect(() => {
    let productService = new ProductService();
    productService.getProductByName(name).then((result) => {
      setProduct(result.data.data);
    });
  }, [name]);

  return (
    <div>
      <Card.Group>
        <Card fluid>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
            />
            <Card.Header>{product.productName}</Card.Header>
            <Card.Meta>{product.category.categoryName}</Card.Meta>
            <Card.Description>{product.quantityPerUnit}</Card.Description>s
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Approve
              </Button>
              <Button basic color="red">
                Decline
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
};

export default ProductDetail;
