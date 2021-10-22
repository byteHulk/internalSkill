/*
 * @Author: your name
 * @Date: 2021-08-20 10:39:16
 * @LastEditTime: 2021-08-20 17:29:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /aminer.cn/src/core/home2/c/RecommPaper.tsx
 */
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { connect, Link, component } from 'acore';
import { isZHByPub } from 'utils/utils';
import { classnames } from 'utils';
import { formatMessage } from 'locales';
import { isLogin } from 'utils/auth';
import pubHelper from 'helper/pub';
import PublicationList from 'aminer/components/pub/PublicationList.tsx';
import { PubInfo, PubListZoneType, PubAuthor } from 'aminer/components/pub/pub_type';
import { IUser } from 'aminer/components/common_types';
import VideoPlayer from 'aminer/components/video/fullPagePlayer';
import { PersonInfoCardBySubscriber } from './card';
import { NormalControlTag, CollectionTag } from './card/tag';
import consts from 'consts';
import styles from './RecommendsPaper.less';

interface Proptypes {
  dispatch: (config: { type: string; payload: { params: any } }) => Promise<any>;
  papers: PubInfo[];
  labels: [];
  user: IUser;
  hotPaper?: boolean;
  observer?: IntersectionObserver;
  authorId: string;
  sendPingBack: (params: any) => void;
  showVideo: () => void;
}

const RecommendsPaper = (props: Proptypes) => {
  const {
    dispatch,
    papers,
    hotPaper = false,
    user,
    labels,
    sendPingBack,
    observer,
    authorId,
  } = props;

  const paper = papers?.[0];
  const type = paper?.type || 0
  // const legend = hotPaper ? '推荐红文' : '推荐论文';
  const divRef = useRef(null);
  const [isExpandFeedback, setIsExpandFeedback] = useState(false);
  const defaultCover = `${consts.Fileserver}/sys/aminer/defultCover.png`;

  //前端埋点 曝光
  useEffect(() => {
    if (observer) {
      observer.observe(divRef?.current);
    }
  }, []);

  const showVideo = () => {
    if (isLogin(user)) {
      dispatch({
        type: 'modal/open',
        payload: {
          title: formatMessage({
            id: 'aminer.paper.topic.paper.playVideo',
            defaultMessage: '播放视频',
          }),
          width: '60vw',
          content: <VideoPlayer video={{ url: paper?.data2videoUrl }} />,
        },
      });
    } else {
      dispatch({ type: 'modal/login' });
    }
  };

  const renderBottomContent = () => {
    const authors = paper?.authors;
    const authorsLen = authors?.length;
    let author1 = authors?.[0];
    const author2 = authorsLen && authors[authorsLen - 1];
    if (author1?.id === author2?.id) {
      author1 = null;
    }

    return (
      <div className="bottom-content">
        {author1 && (
          <PersonInfoCardBySubscriber
            e_person={author1}
            personInfo={author1}
            authorType="first"
            nowarp={true}
          />
        )}
        {authorsLen && author2 && (
          <PersonInfoCardBySubscriber
            e_person={author2}
            personInfo={author2}
            authorType="corresponding"
            nowarp={true}
          />
        )}
      </div>
    );
  };

  const handleTagClick = (tagValue: string) => {
    switch (tagValue) {
      case 'feedback':
        setIsExpandFeedback(!isExpandFeedback);
        break;
      case 'collection':
        break;
      default:
        setIsExpandFeedback(false);
    }
  };

  const cardMap = {
    media:  <>
    {/* TODO: 有视频显示视频，有图片显示图片，两者都没有就不显示 */}
    {paper?.figureUrls && (
      <div className="image">
        <Link
          to={pubHelper.genPubTitle({ id: paper?.id, title: paper.title })}
          target="_blank"
        >
          <img
            src={pubHelper.getPubImg({ id: paper?.id, img: paper?.figureUrls?.[0] })}
            alt="paper title"
            onError={e => (e.target.src = defaultCover)}
          />
        </Link>
      </div>
    )}
  </>,
    defaultCardContent : <>
        {/* 论文详情 */}
        <div className="paper">
          <PublicationList
            papers={papers}
            isShowPdfIcon={false}
            showInfoContent={[]}
            titleLinkQuery={{ query: { s: 'social' } }}
            titleRightZone={[]}
            contentRightZone={[]}
            venueZone={[
              ({ paper }) => {
                const { venue, pages, year } = paper;

                const { venueName, venueName_zh } = pubHelper.getDisplayVenue(venue, pages, year);
                const str = isZHByPub(paper)
                  ? venueName_zh || venueName
                  : venueName || venueName_zh;
                return (
                  <React.Fragment key="summary_content">
                    {!hotPaper && paper?.summary && (
                      <div className={styles.summaryBox}>
                        <div className={styles.summaryIcon}>
                          <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-Cited" />
                          </svg>
                        </div>
                        <div>{paper?.summary}</div>
                        <div className={styles.summaryIconAfter}>
                          <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-Cited" />
                          </svg>
                        </div>
                      </div>
                    )}
                    {str ? (
                      <div className="venue-line" key={26}>
                        <svg className="icon" aria-hidden="true" style={{ marginRight: '4px' }}>
                          <use xlinkHref="#icon-laiyuan" />
                        </svg>
                        {`${str}（${year}）`}
                      </div>
                    ) : (
                      <span> &nbsp;&nbsp;</span>
                    )}
                  </React.Fragment>
                );
              },
            ]}
          />
          {(hotPaper || paper?.figureUrls?.[0]) && paper && paper?.id && !paper?.summary
            ? renderBottomContent()
            : null}
          <div className="collection">
            <NormalControlTag
              onTagClick={handleTagClick}
              tagName={'收藏'}
              tagValue={'collection'}
              isCustomContent={true}
              customContent={
                <div className={styles.customTagContent}>
                  <CollectionTag key={5} paper={{ ...paper }} is_starring={false} withNum={false} />
                </div>
              }
            />
          </div>

        </div>
    </>,
    0:{
      legend:'推荐论文',
      content:() => {
        const 
        return <>
          
        </>
      }
    },
    1:{
      legend:'推荐红文',
      className: styles.hotPaper,
      content:(<>
      <div className="video" onClick={showVideo}>
            <img
              src={pubHelper.getPubImg({ id: paper?.id, img: paper?.figureUrls?.[0] })}
              alt={paper.title}
              onError={e => (e.target.src = defaultCover)}
            />
            <div className="icon-wrap">
              <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-radio" />
              </svg>
            </div>
          </div>
      </>)
    },
    6:{
      legend:'数据集推荐',
      className: styles.dataCard,
      content:(<div></div>)
    },
    8:{
      legend:'报告推荐',
      className: styles.reportCard,
      content:(<div></div>)
    },
    3:{
      legend:'机构推荐',
      className: styles.orgCard,
      content:(<div></div>)
    },
    
  }
  return (
    <div
      className={classnames(styles.RecommendsPaper, cardMap[type]?.className)}
      ref={divRef}
      data-id={paper?.id}
      onClick={() => {
        if (sendPingBack) {
          sendPingBack({
            pub_ids: paper?.id || '',
            author_id: authorId || '',
            action: 'click',
          });
        }
      }}
    >
      <div className={styles.bg} />
      {labels && (
        <div className="legendAndKeywords">
          <div className={classnames('legend')}>{cardMap[type]?.legend}</div>
          <div className="keywords">
            {labels?.map(label => (
              <span key={label} className="label">
                {label}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="paperContent">
        {/* pubInfoList?.[0]?.data2videoUrl */}
        {hotPaper ? (
          
        ) : (
          <>
            
          </>
        )}
        {/* 论文详情 */}
        <div className="paper">
          <PublicationList
            papers={papers}
            isShowPdfIcon={false}
            showInfoContent={[]}
            titleLinkQuery={{ query: { s: 'social' } }}
            titleRightZone={[]}
            contentRightZone={[]}
            venueZone={[
              ({ paper }) => {
                const { venue, pages, year } = paper;

                const { venueName, venueName_zh } = pubHelper.getDisplayVenue(venue, pages, year);
                const str = isZHByPub(paper)
                  ? venueName_zh || venueName
                  : venueName || venueName_zh;
                return (
                  <React.Fragment key="summary_content">
                    {!hotPaper && paper?.summary && (
                      <div className={styles.summaryBox}>
                        <div className={styles.summaryIcon}>
                          <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-Cited" />
                          </svg>
                        </div>
                        <div>{paper?.summary}</div>
                        <div className={styles.summaryIconAfter}>
                          <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-Cited" />
                          </svg>
                        </div>
                      </div>
                    )}
                    {str ? (
                      <div className="venue-line" key={26}>
                        <svg className="icon" aria-hidden="true" style={{ marginRight: '4px' }}>
                          <use xlinkHref="#icon-laiyuan" />
                        </svg>
                        {`${str}（${year}）`}
                      </div>
                    ) : (
                      <span> &nbsp;&nbsp;</span>
                    )}
                  </React.Fragment>
                );
              },
            ]}
          />
          {/* <div className="authors"> */}
          {(hotPaper || paper?.figureUrls?.[0]) && paper && paper?.id && !paper?.summary
            ? renderBottomContent()
            : null}
          <div className="collection">
            <NormalControlTag
              onTagClick={handleTagClick}
              tagName={'收藏'}
              tagValue={'collection'}
              isCustomContent={true}
              customContent={
                <div className={styles.customTagContent}>
                  <CollectionTag key={5} paper={{ ...paper }} is_starring={false} withNum={false} />
                </div>
              }
            />
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default component(
  connect(({ auth }) => ({
    user: auth.user,
  })),
)(RecommendsPaper);
