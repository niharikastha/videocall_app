export const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJhYzIxZmFiOS0xNTM5LTQ1MzEtYjVmZC1mZmY4MTJmOTRlNjMiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTczMjE4NzEyNiwiZXhwIjoxNzYzNzIzMTI2fQ.P0MAuRE78U3illJU30GwgnachYSjfzkI2dNNDiYB83I"; // token should be in String format

// API call to create meeting
export const createMeeting = async ({token}) => {
  const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
    method: 'POST',
    headers: {
      authorization: `${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({}),
  });
  const {roomId} = await res.json();
  console.log('room id', roomId);
  return roomId;
};
