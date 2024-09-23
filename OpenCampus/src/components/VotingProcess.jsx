export const VotingProcess = () => {
  return (
    <>
      <h2>What is the voting process? </h2>
      <ol>
        <li>
          <h5>
            Administrators post proposals to Snapshot after ensuring that each
            one has gone through the correct process.
          </h5>
        </li>
        <li>
          <h5>
            The voting for each proposal will be open for voting for 7 days
            (including the date that it was posted), closing on the 7th day. New
            proposals can be posted at any time as instructed by the Council.
            This is when the 7-day voting window opens as well. Following
            posting, an announcement will be made via the Open Campus Discord
            #governance channel.
          </h5>
        </li>
        <li>
          <h5>
            EDU tokenholders vote on Snapshot. One EDU is equal to one vote. As
            votes cannot be divided into fractions and the total number of votes
            should not ever exceed the number of tokens minted, the number of
            votes will be rounded down if a fractional number of tokens is owned
            by the voter (i.e., 100.1 tokens will result in 100 votes, and so
            will 100.9 tokens).
          </h5>
        </li>
        <li>
          <h5>
            The voting options for a live proposal are “In favor” and “Against.”
            Voting “In favor” means the voter is in favor of implementing the
            proposal exactly as-is. Voting “Against” means the vote is against
            implementing the proposal exactly as-is — you may vote “Against” to
            encourage the author to resubmit the proposal after making changes.
          </h5>
        </li>
        <li>
          <h5>
            Proposals that receive a majority “In favor” vote are moved into
            implementation. Proposals that are rejected will have the chance to
            be resubmitted via the appropriate resubmission template if the
            author contacts an administrator to initiate this process. If by the
            vote close time, the live proposal has not gotten any votes or is
            tied, it will be tagged as “Stalled” and be eligible for
            resubmission.
          </h5>
        </li>
      </ol>
    </>
  );
};
