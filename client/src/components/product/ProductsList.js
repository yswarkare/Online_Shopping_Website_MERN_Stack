import React, { Component } from 'react';
import { Link } from "react-router-dom";
import withcProductListHOC from './withProductsList';
import { Card, CardHeader, CardBody, CardImg, CardText } from "reactstrap";

class WrappedProductList extends Component {


    render () {
        return (
            <div className="product-card-container">
                <Link to={`/product-page/${this.props.product._id}`}>
                    <Card className="product-card card">
                        <CardHeader>
                            { this.props.product.productName }
                        </CardHeader>
                        <CardImg src={this.props.product.image}>
                        </CardImg>
                        <CardBody className="product-card-body">
                            <CardText>
                                {`${this.props.product.productName} ${(this.props.product.brandName).toUpperCase()}`}
                            </CardText>
                            <CardText>
                                {`Rs. ${this.props.product.price}`}
                            </CardText>
                        </CardBody>
                    </Card>
                </Link>
            </div>
        )
    }
}

const ProdcutListHOC = withcProductListHOC(WrappedProductList);

export default ProdcutListHOC;