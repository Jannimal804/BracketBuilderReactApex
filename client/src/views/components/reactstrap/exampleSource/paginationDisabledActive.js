const PaginationDisabledActiveSource = `import React, { Component } from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

class PaginationDisabledActive extends Component {
   render() {
      return (
         <div>
            <Pagination aria-label="Page navigation example">
               <PaginationItem disabled>
                  <PaginationLink previous href="#" />
               </PaginationItem>
               <PaginationItem active>
                  <PaginationLink href="#">1</PaginationLink>
               </PaginationItem>
               <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
               </PaginationItem>
               <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
               </PaginationItem>
               <PaginationItem>
                  <PaginationLink href="#">4</PaginationLink>
               </PaginationItem>
               <PaginationItem>
                  <PaginationLink href="#">5</PaginationLink>
               </PaginationItem>
               <PaginationItem>
                  <PaginationLink next href="#" />
               </PaginationItem>
            </Pagination>
         </div>
      );
   }
}

export default PaginationDisabledActive;`;

export default PaginationDisabledActiveSource;
