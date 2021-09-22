<table class="table table-bordered">
    <thead>
    <tr>
        <th scope="col">Parameters</th>
        <th scope="col">Values</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td scope="row" ><p class="text-left">Collection Id</p></td>
        <td><%=request.getParameter("collection_id")%></td>
    </tr>
    <tr>
        <td scope="row" ><p class="text-left">Collection Status</th>
        <td><%=request.getParameter("collection_status")%></td>
    </tr>
    <tr>
        <td scope="row" ><p class="text-left">External Reference</th>
        <td><%=request.getParameter("external_reference")%></td>
    </tr>
    <tr>
        <td scope="row" ><p class="text-left">Payment Type</p></td>
        <td><%=request.getParameter("payment_type")%></td>
    </tr>
    <tr>
        <td scope="row" ><p class="text-left">Merchant Order Id</p></td>
        <td><%=request.getParameter("merchant_order_id")%></td>
    </tr>
    <tr>
        <td scope="row" ><p class="text-left">Preference Id</p></td>
        <td><%=request.getParameter("preference_id")%></td>
    </tr>
    <tr>
        <td scope="row" ><p class="text-left">Site Id</p></td>
        <td><%=request.getParameter("site_id")%></td>
    </tr>
    <tr>
        <td scope="row" ><p class="text-left">Proccesing mode</p></td>
        <td><%=request.getParameter("processing_mode")%></td>
    </tr>
    <tr>
        <td scope="row" ><p class="text-left">Merchant Account Id</p></td>
        <td><%=request.getParameter("merchant_account_id")%></td>
    </tr>
    </tbody>
</table>