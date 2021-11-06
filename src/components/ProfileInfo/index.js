import React, { forwardRef } from "react";
import "./index.scss";


const ProfileInfo = (props, ref) => {
  const {
    data: { sections = [] }
  } = props;
  return (
    <div className="infoWrapper" ref={ref}>
      {sections.length &&
        sections.map(section => {
          const TopSectionComponent =
            section.topSection && section.topSection.Component;
          return (
            <div key={section.heading}>
              {(section.heading && (
                <div className="infoWrapper__header"> {section.heading} </div>
              )) ||
                null}
              {section.topSection && (
                <div className="infoWrapper__topSection">
                  {(section.topSection.text && (
                    <div className="infoWrapper__text">
                      {" "}
                      {section.topSection.text}{" "}
                    </div>
                  )) || (
                    <>
                      {(TopSectionComponent && (
                        <TopSectionComponent {...section.topSection.props} />
                      )) ||
                        null}
                    </>
                  )}
                </div>
              )}
              {section.bottomSection && (
                <div className="infoWrapper__bottomSection">
                  {section.bottomSection &&
                    section.bottomSection.list &&
                    section.bottomSection.list.length &&
                    section.bottomSection.list.map(item => {
                      const Component = item.Component;
                      return (
                        <>
                          {(Component && <Component {...item.props} />) || (
                            <p className="infoWrapper__list">{item}</p>
                          )}
                        </>
                      );
                    })}
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
};

export default forwardRef(ProfileInfo);
