import { useEffect, React, useState } from "react";
import axios from 'axios';
import { teamList } from '../demoJSONs/teamList';
import { DataGrid } from '@material-ui/data-grid';

function CoachTeam() {
    // var errorMsg = '';
    // var data = [];
    const [tableData, setTableData] = useState([]);
    const [errorMsg, setErrorMsg] = useState("");

    const columns = [
        { field: 'id', headerName: 'ID', minWidth: 100, flex: 1, headerClassName: 'super-app-theme--header', },
        { field: 'teamName', headerName: 'Team', minWidth: 200, flex: 2, headerClassName: 'super-app-theme--header', },
        { field: 'ageGrp', headerName: 'Age Group', minWidth: 200, flex: 1.5, headerClassName: 'super-app-theme--header', },
        { field: 'teamMembersNums', headerName: 'No. of Members', minWidth: 200, flex: 1.5, headerClassName: 'super-app-theme--header', },
        { field: 'match', headerName: 'Match', minWidth: 200, flex: 2, headerClassName: 'super-app-theme--header', },
    ]
    /* don't use width, use combination of flex and min-width */

    useEffect(() => {
        // Update the document title using the browser API
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                setTableData(response.data);
                console.log(tableData);
                setTableData(teamList);
                console.log(tableData);
            })
            .catch((error) => {
                setErrorMsg(error);
                console.log(errorMsg);
            });
    }, []);

    var coachTeam = {
        width: '100%',
        height: '100%',
        // backgroundColor: '#EDF5FC',
        color: '#999999',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'RobotoSlab',
        fontWeight: 700,
        // padding: '2em'
    }

    if (tableData.length === 0) {
        return (
            <div className='coachTeam' style={{
                ...coachTeam,
                backgroundColor: '#EDF5FC'
            }}>
                LETS ENROLL SOME TEAMS NOW !
            </div>
        )
    } else if (tableData.length > 0) {
        return (
            <div className='coachTeam' style={{
                ...coachTeam,
                backgroundColor: '#EDEDED'
            }}>
                <DataGrid style={{
                    width: '90%',
                    height: '90%',
                    backgroundColor: '#FFFFFF'
                    /* display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center', */
                }} className='teamTable'
                    rows={tableData}
                    columns={columns}
                    pageSize={5}
                    disableSelectionOnClick
                    rowsPerPageOptions={[5, 15, 30, 45, 60, 75, 90]}
                ></DataGrid>
            </div >

        )
    }

    /* if (tableData.length === 0) {
        return (
            <div className='coachTeam' style={coachTeam} style={{
                backgroundColor: '#EDF5FC',
            }}>
                LETS ENROLL SOME TEAMS NOW !
            </div>
        )
    } else if (tableData.length === 0) {
        return (
            <div className='coachTeam' style={coachTeam} style={{
                backgroundColor: '#FFFFFF',
            }}>
                <DataGrid style={{
                    width: '100%',
                }} className='teamTable'
                    rows={tableData}
                    columns={columns}
                    pageSize={10}></DataGrid>
            </div>
        )
    } */
}

export default CoachTeam
