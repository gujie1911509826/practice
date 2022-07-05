import React from 'react';

const Index = (props) => {
    return (
        <div>
            <div draggle={true} onDragEnd={(e)=>{console.log('12312',e);
            e.preventDefault();
            }}>
                11111
            </div>
            <div draggle={true}>
                2222
            </div>
        </div>
    )

}
export default Index;