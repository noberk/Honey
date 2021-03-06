import styled from 'styled-components';
import { } from "styled-system";
// 容器
export const Container = styled.div`
max-width : 1200px;
width : 1200px;
height : 100%;
margin: auto;
`;

const spanBase = styled.span``;
interface Position {
    w?: string
    h?: string

    mt?: string
    ml?: string
    mr?: string
    mb?: string

    pt?: string
    pl?: string
    pr?: string
    pb?: string

    lt?: string
}

export const StySpan = styled(spanBase).attrs<Position>({}) `
    width:${(p: any) => p.w};
    height:${(p: any) => p.h};

    margin-top:${(p: any) => p.mt};
    margin-left:${(p: any) => p.ml};
    margin-right:${(p: any) => p.mr};
    margin-bottom:${(p: any) => p.mb};

    padding-top:${(p: any) => p.pt};
    padding-left:${(p: any) => p.pl};
    padding-right:${(p: any) => p.pr};
    padding-bottom:${(p: any) => p.pb};

    line-height:${(p: any) => p.lt};
 `;


export const StyDiv = styled.div.attrs<Position>({}) `
    width:${(p: any) => p.w};
    height:${(p: any) => p.h};

    margin-top:${(p: any) => p.mt};
    margin-left:${(p: any) => p.ml};
    margin-right:${(p: any) => p.mr};
    margin-bottom:${(p: any) => p.mb};

    padding-top:${(p: any) => p.pt};
    padding-left:${(p: any) => p.pl};
    padding-right:${(p: any) => p.pr};
    padding-bottom:${(p: any) => p.pb};

    line-height:${(p: any) => p.lt};
 `;