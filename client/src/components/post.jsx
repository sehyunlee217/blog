export default function Post() {
    return (
        <div className='post flex flex-col'>
            <div className='text-2xl'>This is the title of the post</div>
            <div className='text-sm'>2023. Nov. 16</div>
            <div>
                이번 포스팅에서는 상대 경로나 절대 경로를 통해서 내부 모듈을 불러올 때 겪을 수 있는 문제점에 대해서 알아보겠습니다.
                그리고 경로 별칭을 통해서 좀 더 깔끔하게 내부 모듈을 불러올 수 있도록 타입스크립트를 설정하는 방법에 대해서 배우겠습니다.
            </div>
        </div>
    );
}