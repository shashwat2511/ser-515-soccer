import React, { useState, useEffect } from "react";
import { Box } from '@mui/system';
import { DataGrid } from "@material-ui/data-grid";
import { withRouter } from 'react-router-dom';

function TeamsAsPerDivision(props) {
    const [tableData, setTableData] = useState([]);
    const [thereIsAValue, setThereIsAValue] = useState(false);

    const columns = [
        { field: 'id', headerName: 'NUMBER', minWidth: 200, flex: 2, headerClassName: 'super-app-theme--header', editable: false },
        {
            field: 'match_division', headerName: 'DIVISION', minWidth: 200, flex: 2, headerClassName: 'super-app-theme--header', editable: false,
            renderCell: (params) => {
                return (<a href="" className="cellAnchor">{params.value}</a>);
            }
        },
        { field: 'match_time', headerName: 'TIME', minWidth: 200, flex: 2, headerClassName: 'super-app-theme--header', editable: false },
        {
            field: 'field_id', headerName: 'FIELD', minWidth: 200, flex: 2, headerClassName: 'super-app-theme--header', editable: false,
            renderCell: (params) => {
                return (<a href="../maps" className="cellAnchor">{params.value}</a>);
            }
        },
        {
            field: 'team_1_name', headerName: 'TEAM 1', minWidth: 200, flex: 2, headerClassName: 'super-app-theme--header', editable: false,
            renderCell: (params) => {
                return (<a href="" className="cellAnchor">{params.value}</a>);
            }
        },
        {
            field: 'team_2_name', headerName: 'TEAM 2', minWidth: 200, flex: 2, headerClassName: 'super-app-theme--header', editable: false,
            renderCell: (params) => {
                return (<a href="" className="cellAnchor">{params.value}</a>);
            }
        },
    ];

    useEffect(() => {
        let param = new URLSearchParams(props.location.search);
        let division = param.get('division');
        let data = {
            division: '',
            age_group: '',
            gender: '',
        };
        let location = {
            ...props.location,
        };

        let params = new URLSearchParams(location.search);
        delete location.key;

        if (division !== null && division !== '') {
            data.division = division;
            params.set("division", data.division);
            setThereIsAValue(true);
        } else {
            params.delete("division");
        }

        if (thereIsAValue) {
            setTableData([]);
            // create a searching variable and use it to disable dropdowns.
            fetch("http://localhost:5000/api/v1/fetchTeamList/", {
                body: JSON.stringify(data),
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "POST",
                    "Access-Control-Request-Headers": "Content-Type"
                },
            }).then((res) => res.json())
                .then((result) => {
                    setTableData(result.matches);
                })
                .catch((e) => {
                });
        }
    }, []);

    var noDataDisplay = {
        width: '100%',
        height: '100%',
        backgroundColor: 'transparent',
        color: '#999999',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'RobotoSlab',
        fontWeight: 700,
    }

    if (thereIsAValue) {
        return (
            <Box className="sssMainDiv" style={{
                height: '27rem',
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <DataGrid style={{
                    width: '90%',
                    height: '90%',
                    backgroundColor: '#FFFFFF'
                }} className='teamTable'
                    rows={tableData}
                    columns={columns}
                    pageSize={5}
                    disableSelectionOnClick
                    rowsPerPageOptions={[15, 30, 45, 60, 75, 90]}
                    isCellEditable="false"
                ></DataGrid>
            </Box>
        )
    } else {
        return (
            <Box style={noDataDisplay}>
                THERE IS NO DATA TO BE DISPLAYED
            </Box>
        )
    }

}

export default withRouter(TeamsAsPerDivision);