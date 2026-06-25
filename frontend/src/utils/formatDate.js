import moment from "moment";
const formatDate = (dateString) => {
    return moment(dateString).format("hh:mm A");
}
export default formatDate;