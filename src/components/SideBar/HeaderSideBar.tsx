import styled from "styled-components";
export function HeaderSideBar() {
  return (
    <ContainerHeaderSideBar>
      <div>
        <span className="material-symbols-outlined ">favorite</span>
      </div>
      <h2>TASK APP</h2>
    </ContainerHeaderSideBar>
  );
}

export const ContainerHeaderSideBar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 912px) {
    & {
      display: none;
    }
  }
`;
